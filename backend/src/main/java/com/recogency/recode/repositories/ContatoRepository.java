package com.recogency.recode.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recogency.recode.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
