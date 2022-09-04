package com.movie.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.booking.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	
	public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId, String password);

}
