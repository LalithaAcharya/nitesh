package com.movie.booking.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movie.booking.Model.Customer;
import com.movie.booking.Repository.CustRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {
	
	  @Autowired
	private CustRepo crepo;
		  
		  @PostMapping("/customer")
		  public Customer addMessage(@RequestBody Customer cust) {
			  return crepo.save(cust);
		  }
		  
		  @GetMapping("/getCust")
		  public List<Customer> getMessage() {
			  return crepo.findAll();
		  }
		  

}
