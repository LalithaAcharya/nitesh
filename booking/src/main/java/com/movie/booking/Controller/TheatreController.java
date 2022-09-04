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

import com.movie.booking.Model.Theater;
import com.movie.booking.Repository.TheatreRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TheatreController {

	@Autowired
	private TheatreRepo trepo;
	
	@GetMapping("/gettheatre")
	public List<Theater> getAlltheatres(){
		return trepo.findAll();
	}
	
	@PostMapping("/addtheatre")
	public Theater addTheatre(@RequestBody Theater t) {
		return trepo.save(t);
	}
	
	@GetMapping("/gettheatrebyid/{id}")
	public Optional<Theater> getTheatreById(@PathVariable int id){
		return trepo.findById(id);
	}
	
	@DeleteMapping("/deltheatre/{id}")
	public void deleteTheatre(@PathVariable int id) {
		trepo.deleteById(id);
	}
	
	@PutMapping("/updatetheater/{id}")
	public Theater updateTheater(@PathVariable int id, @RequestBody Theater theatre) {
		return trepo.save(theatre);
	}
}
