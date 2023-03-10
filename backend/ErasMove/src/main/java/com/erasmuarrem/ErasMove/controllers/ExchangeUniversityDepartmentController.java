package com.erasmuarrem.ErasMove.controllers;

import com.erasmuarrem.ErasMove.models.Course;
import com.erasmuarrem.ErasMove.models.ExchangeUniversityDepartment;
import com.erasmuarrem.ErasMove.services.ExchangeUniversityDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exchangeUniversityDepartment")
@CrossOrigin
public class ExchangeUniversityDepartmentController {

    private final ExchangeUniversityDepartmentService exchangeUniversityDepartmentService;

    @Autowired
    public ExchangeUniversityDepartmentController(ExchangeUniversityDepartmentService exchangeUniversityDepartmentService) {
        this.exchangeUniversityDepartmentService = exchangeUniversityDepartmentService;
    }

    @GetMapping
    public List<ExchangeUniversityDepartment> getExchangeUniversityDepartments() {
        return exchangeUniversityDepartmentService.getExchangeUniversityDepartments();
    }

    @GetMapping("/{id}")
    public ExchangeUniversityDepartment getExchangeUniversityDepartmentByID(@PathVariable("id") Long id) {
        return exchangeUniversityDepartmentService.getExchangeUniversityDepartmentByID(id);
    }

    @GetMapping("/universityID/{universityID}/departmentName/{departmentName}")
    public ExchangeUniversityDepartment getExchangeUniversityDepartmentByExchangeUniversityIDAndDepartmentName(
            @PathVariable("universityID") Long universityID,
            @PathVariable("departmentName") String departmentName
    ) {
        return exchangeUniversityDepartmentService.getExchangeUniversityDepartmentByExchangeUniversityIDAndDepartmentName(universityID, departmentName);
    }

    @GetMapping("/acceptedStudent/{acceptedStudentID}")
    public ResponseEntity<ExchangeUniversityDepartment> getExchangeUniversityDepartmentByAcceptedStudentID(@PathVariable("acceptedStudentID") Long acceptedStudentID) {
        return exchangeUniversityDepartmentService.getExchangeUniversityDepartmentByAcceptedStudentID(acceptedStudentID);
    }

    @GetMapping("/exchangeUniversityID/{exchangeUniversityID}")
    public List<ExchangeUniversityDepartment> getExchangeUniversityDepartmentsByExchangeUniversityID(
            @PathVariable("exchangeUniversityID") Long exchangeUniversityID) {
        return exchangeUniversityDepartmentService.getExchangeUniversityDepartmentByExchangeUniversityID(exchangeUniversityID);
    }

    @PostMapping("/add")
    public void addExchangeUniversityDepartment(@RequestBody ExchangeUniversityDepartment exchangeUniversityDepartment) {
        exchangeUniversityDepartmentService.addExchangeUniversityDepartment(exchangeUniversityDepartment);
    }

    @PostMapping("/addCourse/{id}")
    public void addCourseByExchangeDepartmentID(@RequestBody Course course, @PathVariable("id") Long id) {
        exchangeUniversityDepartmentService.addCourseByExchangeDepartmentID(course, id);
    }

    @PostMapping("/addElectiveCourse/{id}")
    public void addElectiveCourseByExchangeDepartmentID(@RequestBody Course course, @PathVariable("id") Long id) {
        exchangeUniversityDepartmentService.addElectiveCourseByExchangeDepartmentID(course, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteExchangeUniversityDepartmentByID(@PathVariable("id") Long id) {
        exchangeUniversityDepartmentService.deleteExchangeUniversityDepartmentByID(id);
    }

    @DeleteMapping("/delete/{id}/course/{courseID}")
    public void deleteCourseByExchangeDepartmentIDAndCourseID(@PathVariable("id") Long id, @PathVariable("courseID") Long courseID) {
        exchangeUniversityDepartmentService.deleteCourseByExchangeDepartmentIDAndCourseID(id, courseID);
    }

    @DeleteMapping("/delete/{id}/courseName/{courseName}")
    public void deleteCourseByExchangeDepartmentIDAndCourseName(@PathVariable("id") Long id, @PathVariable("courseName") String courseName) {
        exchangeUniversityDepartmentService.deleteCourseByExchangeDepartmentIDAndCourseName(id, courseName);
    }

    @DeleteMapping("/delete/{id}/electiveCourse/{electiveCourseID}")
    public void deleteElectiveCourseByExchangeDepartmentIDAndCourseID(@PathVariable("id") Long id, @PathVariable("electiveCourseID") Long electiveCourseID) {
        exchangeUniversityDepartmentService.deleteElectiveCourseByExchangeDepartmentIDAndCourseID(id, electiveCourseID);
    }
}
