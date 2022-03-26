package com.example.fpis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.Radnik;

@Repository
public interface RadnikRepository extends JpaRepository<Radnik, Integer> {

}
