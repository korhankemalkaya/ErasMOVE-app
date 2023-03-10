package com.erasmuarrem.ErasMove.services;

import com.erasmuarrem.ErasMove.models.Application;
import com.erasmuarrem.ErasMove.repositories.ApplicationRepository;
import com.erasmuarrem.ErasMove.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final DepartmentRepository departmentRepository;

    @Autowired
    public ApplicationService(ApplicationRepository applicationRepository, DepartmentRepository departmentRepository) {
        this.applicationRepository = applicationRepository;
        this.departmentRepository = departmentRepository;
    }


    public List<Application> getApplications() {
        return applicationRepository.findAll();
    }

    public void addApplication(Application application) {
        Optional<Application> applicationOptional = applicationRepository.
                findByOutgoingStudentID(application.getOutgoingStudent().getID());

        if ( applicationOptional.isPresent() ) {
            throw new IllegalStateException("application for student with ID:" + application.getOutgoingStudent().getID() + " exists!");
        }

        applicationRepository.save(application);
    }

    public Application getByOutgoingStudentID(Long id) {
        Optional<Application> applicationOptional = applicationRepository.findByOutgoingStudentID(id);

        return applicationOptional.orElse(null);
    }

    public Application getApplicationById(Long id) {
        Optional<Application> applicationOptional = applicationRepository.findById(id);

        if ( !applicationOptional.isPresent() ) {
            throw new IllegalStateException("Application with id: " + id + " doesn't exist!");
        }

        return applicationOptional.get();
    }

    public void deleteCourse(Long id) {
        Optional<Application> applicationOptional = applicationRepository.findById(id);

        if ( !applicationOptional.isPresent() ) {
            throw new IllegalStateException("Application with id: " + id + " doesn't exist!");
        }

        applicationRepository.deleteById(id);
    }

    public List<Application> getApplicationsByDepartmentID(Long departmentID) {

        if ( !departmentRepository.existsById(departmentID) ) {
            throw new IllegalStateException("Department with id:" + departmentID + " doesn't exist!");
        }

        return applicationRepository.findByOutgoingStudent_DepartmentID(departmentID);
    }

    public List<Application> getApplicationsByDepartmentName(String departmentName ) {

        if ( !departmentRepository.existsByDepartmentName(departmentName) ) {
            throw new IllegalStateException("Department with name " + departmentName +  " doesn't exist!");
        }

        return applicationRepository.findByOutgoingStudent_Department_departmentName(departmentName);
    }
}

