package com.example.fpis.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.fpis.entity.NacinPlacanja;

@Repository
public interface NacinPlacanjaRepository extends JpaRepository<NacinPlacanja, Integer> {

}
