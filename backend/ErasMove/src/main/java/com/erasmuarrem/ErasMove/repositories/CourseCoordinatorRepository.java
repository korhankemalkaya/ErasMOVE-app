package com.erasmuarrem.ErasMove.repositories;

import com.erasmuarrem.ErasMove.models.CourseCoordinator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CourseCoordinatorRepository extends JpaRepository<CourseCoordinator, Long> {
    Optional<CourseCoordinator> findByCourseList_ID(Long courseID);
    Optional<CourseCoordinator> findByEmail(String email);
    List<CourseCoordinator> findByDepartmentID(Long departmentID);
}
