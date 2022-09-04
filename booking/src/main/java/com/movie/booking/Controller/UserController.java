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

import com.movie.booking.Model.User;
import com.movie.booking.Repository.UserRepo;
import com.movie.booking.Service.LoginService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private LoginService loginService;
	  
	  //Save Users (Register//SignUp)
	  @PostMapping("/registeruser")
	  public User registerUser(@RequestBody User user) throws Exception {
	    String tempEmailId = user.getEmailId();
	    if(tempEmailId != null && !"".equals(tempEmailId)) {
	    	User userObj = loginService.fetchUserByEmailId(tempEmailId);
	      if(userObj != null) {
	        throw new Exception("User with "+tempEmailId+ " is already exists");
	      } 
	    }
	    User userObj=null;
	    userObj = loginService.saveUser(user);
	    return userObj;
	  }
	  
	  
	  //Login User
	  @PostMapping("/login")
	  public User loginUser(@RequestBody User user) throws Exception {
	    String tempEmail= user.getEmailId();
	    String tempPass= user.getPassword();
	    User userObj = null;
	    if(tempEmail != null && tempPass != null) {
	      userObj = loginService.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
	    }
	    if(userObj == null) {
	      throw new Exception ("User with "+tempEmail+ " does not exists");
	    }
	    return userObj;
	  }


}
