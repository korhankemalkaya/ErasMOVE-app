package com.erasmuarrem.ErasMove.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class ElectiveCourseApprovalRequest extends CourseApprovalRequest {

    @OneToOne
    private DepartmentCoordinator departmentCoordinator;
}
