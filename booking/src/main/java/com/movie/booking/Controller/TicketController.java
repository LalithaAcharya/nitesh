package com.movie.booking.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.booking.Model.Ticket;
import com.movie.booking.Repository.TicketRepo;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TicketController {
	
	@Autowired
	private TicketRepo tkrepo;
	
	@GetMapping("/getticket")
	public List<Ticket> getAllTicket(){
		return tkrepo.findAll();
	}
	
	@PostMapping("/addticket")
	public Ticket addTicket(@RequestBody Ticket t) {
		return tkrepo.save(t);
	}
	
	@GetMapping("/getticketbyid/{id}")
	public Optional<Ticket> getTicketById(@PathVariable int id){
		return tkrepo.findById(id);
	}
	
	@DeleteMapping("/delticket/{id}")
	public void deleteTicket(@PathVariable int id) {
		tkrepo.deleteById(id);
	}
	
	@PutMapping("/updateticket/{id}")
	public Ticket updateScreen(@PathVariable int id, @RequestBody Ticket ticket) {
		return tkrepo.save(ticket);
	}


}
