package com.movie.booking.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.booking.Model.User;
import com.movie.booking.Repository.UserRepo;


@Service
public class LoginService {
		
		@Autowired
		private UserRepo logRepo;
		
		
		public User saveUser(User user) {
			return logRepo.save(user);
		}
		
		
		public User fetchUserByEmailId(String email) {
			return logRepo.findByEmailId(email);
		}
		
		
		public User fetchUserByEmailIdAndPassword(String email, String password) {
			return logRepo.findByEmailIdAndPassword(email, password);
		}

}
