package com.erasmuarrem.ErasMove.controllers;

import com.erasmuarrem.ErasMove.models.ElectiveCourseApprovalRequest;
import com.erasmuarrem.ErasMove.models.ResponseMessage;
import com.erasmuarrem.ErasMove.services.ElectiveCourseApprovalRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/electiveCourseApprovalRequest")
@CrossOrigin
public class ElectiveCourseApprovalRequestController {

    private final ElectiveCourseApprovalRequestService electiveCourseApprovalRequestService;

    @Autowired
    public ElectiveCourseApprovalRequestController(ElectiveCourseApprovalRequestService electiveCourseApprovalRequestService) {
        this.electiveCourseApprovalRequestService = electiveCourseApprovalRequestService;
    }

    @GetMapping
    public List<ElectiveCourseApprovalRequest> getElectiveCourseApprovalRequests() {
        return electiveCourseApprovalRequestService.getElectiveCourseApprovalRequests();
    }

    @GetMapping("/{id}")
    public ElectiveCourseApprovalRequest getElectiveCourseApprovalRequestByID(@PathVariable("id") Long id) {
        return electiveCourseApprovalRequestService.getElectiveCourseApprovalRequestByID(id);
    }

    @GetMapping("/departmentCoordinator/{id}")
    public List<ElectiveCourseApprovalRequest> getElectiveCourseApprovalRequestByDepartmentCoordinatorID(@PathVariable("id") Long id) {
        return electiveCourseApprovalRequestService.getElectiveCourseApprovalRequestByDepartmentCoordinatorID(id);
    }

    @GetMapping("/outgoingStudent/{id}")
    public List<ElectiveCourseApprovalRequest> getElectiveCourseApprovalRequestByOutgoingStudentID(@PathVariable("id") Long id) {
        return electiveCourseApprovalRequestService.getElectiveCourseApprovalRequestByOutgoingStudentID(id);
    }

    @GetMapping("/departmentCoordinator/{id1}/outgoingStudent/{id2}")
    public List<ElectiveCourseApprovalRequest> getElectiveCourseApprovalRequestsByDepartmentCoordinatorAndOutgoingStudentID(
            @PathVariable("id1") Long departmentCoordinatorID,
            @PathVariable("id2") Long outgoingStudentID
    ) {
        return electiveCourseApprovalRequestService.getElectiveCourseApprovalRequestsByDepartmentCoordinatorAndOutgoingStudentID(
                departmentCoordinatorID,
                outgoingStudentID
        );
    }

    @PostMapping("/add")
    public ResponseEntity<ResponseMessage> addElectiveCourseApprovalRequest(@RequestBody ElectiveCourseApprovalRequest electiveCourseApprovalRequest) {
        return electiveCourseApprovalRequestService.addElectiveCourseApprovalRequest(electiveCourseApprovalRequest);
    }

    @PostMapping("/decline/{id}")
    public ResponseEntity<String> declineElectiveCourseApprovalRequestByID(@PathVariable("id") Long id, @RequestParam String feedback) {
        return electiveCourseApprovalRequestService.declineElectiveCourseApprovalRequestByID(id, feedback);
    }

    @PostMapping("/accept/{id}")
    public ResponseEntity<String> acceptElectiveCourseApprovalRequestByID(@PathVariable("id") Long id, @RequestParam String feedback) {
        return electiveCourseApprovalRequestService.acceptElectiveCourseApprovalRequestByID(id, feedback);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteElectiveCourseApprovalRequestByID(@PathVariable("id") Long id) {
        electiveCourseApprovalRequestService.deleteElectiveCourseApprovalRequestByID(id);
    }
}
