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

import com.recogency.recode.entities.Cliente;
import com.recogency.recode.repositories.ClienteRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ClienteResource {
	
	@Autowired
	private ClienteRepository repository;
	
	@GetMapping("/cliente")
	public List<Cliente> getAllClientes() {
		return repository.findAll();
	}
	
	@GetMapping("/cliente/{id}")
	public Cliente getClienteById(@PathVariable Long id) {
		return repository.findById(id).get();
	}
	
	@PostMapping("/cliente")
	public Cliente saveCliente(@RequestBody Cliente cliente) {
		return repository.save(cliente);
	}
	
	@DeleteMapping("/cliente/{id}")
	public void deleteCliente(@PathVariable Long id) {
		repository.deleteById(id);
	}
}	

	/*@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ClienteService clienteService;

	@GetMapping("/cliente")
	public List<Cliente> getAllCliente() {
		return clienteRepository.findAll();
	}

	@GetMapping("/cliente/{id}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable(value = "id") Long clienteId)
			throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(clienteId)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado neste id :: " + clienteId));
		return ResponseEntity.ok().body(cliente);
	}

	@PostMapping("/cliente")
	public Cliente createCliente(@Valid @RequestBody Cliente cliente) {
		cliente.setId(clienteService.generateCliente(Cliente.class));
		return clienteRepository.save(cliente);
	}

	@PutMapping("/cliente/{id}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable(value = "id") Long clienteId,
			@Valid @RequestBody Cliente clienteDetails) throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(clienteId)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado neste id :: " + clienteId));

		cliente.setNome(clienteDetails.getNome());
		cliente.setOrigem(clienteDetails.getOrigem());
		cliente.setDestino(clienteDetails.getDestino());
		cliente.setSaida(clienteDetails.getSaida());
		cliente.setRetorno(clienteDetails.getRetorno());
		cliente.setPreco(clienteDetails.getPreco());
		final Cliente updatedCliente = clienteRepository.save(cliente);
		return ResponseEntity.ok(updatedCliente);
	}

	@DeleteMapping("/cliente/{id}")
	public Map<String, Boolean> deleteCliente(@PathVariable(value = "id") Long clienteId)
			throws ResourceNotFoundException {
		Cliente cliente = clienteRepository.findById(clienteId)
				.orElseThrow(() -> new ResourceNotFoundException("Cliente não encontrado neste id :: " + clienteId));

		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}*/

/*
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
*/