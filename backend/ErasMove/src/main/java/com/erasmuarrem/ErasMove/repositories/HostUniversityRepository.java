package com.erasmuarrem.ErasMove.repositories;

import com.erasmuarrem.ErasMove.models.HostUniversity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HostUniversityRepository extends JpaRepository<HostUniversity, Long> {

    Optional<HostUniversity> findByUniversityName(String universityName);
}
