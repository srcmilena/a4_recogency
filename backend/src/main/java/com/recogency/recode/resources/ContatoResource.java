package com.recogency.recode.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recogency.recode.entities.Contato;
import com.recogency.recode.services.ContatoService;

@RestController
@RequestMapping("/contato")
public class ContatoResource {
	
	@Autowired
	private ContatoService service;
	
	@GetMapping
	public List<Contato> findAll() {
		return service.findAll();
	}

}
