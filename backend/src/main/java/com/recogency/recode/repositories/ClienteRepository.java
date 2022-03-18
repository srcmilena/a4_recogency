package com.recogency.recode.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.recogency.recode.entities.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
