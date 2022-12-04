package com.erasmuarrem.ErasMove.services;

import com.erasmuarrem.ErasMove.models.MandatoryCourseApprovalRequest;
import com.erasmuarrem.ErasMove.repositories.MandatoryCourseApprovalRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MandatoryCourseApprovalRequestService {

    private final MandatoryCourseApprovalRequestRepository mandatoryCourseApprovalRequestRepository;

    @Autowired
    public MandatoryCourseApprovalRequestService(MandatoryCourseApprovalRequestRepository mandatoryCourseApprovalRequestRepository) {
        this.mandatoryCourseApprovalRequestRepository = mandatoryCourseApprovalRequestRepository;
    }


    public List<MandatoryCourseApprovalRequest> getMandatoryCourseApprovalRequests() {
        return mandatoryCourseApprovalRequestRepository.findAll();
    }

    public MandatoryCourseApprovalRequest getMandatoryCourseApprovalRequestByID(Long id) {
        Optional<MandatoryCourseApprovalRequest> mandatoryCourseApprovalRequestOptional = mandatoryCourseApprovalRequestRepository
                .findById(id);

        if ( !mandatoryCourseApprovalRequestOptional.isPresent() ) {
            throw new IllegalStateException("Mandatory Course Approval Request with id:" + id + " doesn't exist!");
        }

        return mandatoryCourseApprovalRequestOptional.get();
    }

    public void addMandatoryCourseApprovalRequest(MandatoryCourseApprovalRequest mandatoryCourseApprovalRequest) {
        mandatoryCourseApprovalRequestRepository.save(mandatoryCourseApprovalRequest);
    }

    public void deleteMandatoryCourseApprovalRequestByID(Long id) {
        Optional<MandatoryCourseApprovalRequest> mandatoryCourseApprovalRequestOptional = mandatoryCourseApprovalRequestRepository
                .findById(id);

        if ( !mandatoryCourseApprovalRequestOptional.isPresent() ) {
            throw new IllegalStateException("Mandatory Course Approval Request with id:" + id + " doesn't exist!");
        }

        mandatoryCourseApprovalRequestRepository.deleteById(id);
    }

    public List<MandatoryCourseApprovalRequest> getMandatoryCourseApprovalRequestByCourseCoordinatorID(Long id) {
        return mandatoryCourseApprovalRequestRepository.findByCourseCoordinatorID(id);
    }

    public List<MandatoryCourseApprovalRequest> getMandatoryCourseApprovalRequestByOutgoingStudentID(Long id) {
        return mandatoryCourseApprovalRequestRepository.findByStudentID(id);
    }
}
