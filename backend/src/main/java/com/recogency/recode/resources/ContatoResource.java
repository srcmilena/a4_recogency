package com.recogency.recode.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recogency.recode.entities.Contato;
import com.recogency.recode.repositories.ContatoRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ContatoResource {
	
	@Autowired
	private ContatoRepository repository;
	
	@GetMapping("/contato")
	public List<Contato> getAllContatos() {
		return repository.findAll();
	}
	
	@GetMapping("/contato/{id}")
	public Contato getContatoById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	@PostMapping("/contato")
	public Contato saveContato(@RequestBody Contato contato) {
		return repository.save(contato);
	}
	
	@DeleteMapping("/contato/{id}")
	public void deleteContato(@PathVariable Long id) {
		repository.deleteById(id);
	}
	
}	

/*@RestController
@RequestMapping("/contato")
public class ContatoResource {
	
	@Autowired
	private ContatoService service;
	
	@GetMapping
	public List<Contato> findAll() {
		return service.findAll();
	}

}*/
