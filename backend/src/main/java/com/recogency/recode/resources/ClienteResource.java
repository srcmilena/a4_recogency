package com.recogency.recode.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recogency.recode.entities.Cliente;
import com.recogency.recode.services.ClienteService;

@RestController
@RequestMapping("/cliente")
public class ClienteResource {

	@Autowired
	private ClienteService service;
	
	@GetMapping
	public List<Cliente> findAll() {
		return service.findAll();
	}
	
}
