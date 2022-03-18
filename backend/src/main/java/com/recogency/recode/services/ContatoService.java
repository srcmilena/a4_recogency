package com.recogency.recode.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recogency.recode.entities.Contato;
import com.recogency.recode.repositories.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repository;
	
	public List<Contato> findAll() {
		List<Contato> resultado = repository.findAll();
		return resultado;
	}
}
