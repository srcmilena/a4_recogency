package com.recogency.recode.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recogency.recode.entities.Cliente;
import com.recogency.recode.repositories.ClienteRepository;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository repository;

	public List<Cliente> findAll() {
		List<Cliente> resultado = repository.findAll();
		return resultado;
	}
}
