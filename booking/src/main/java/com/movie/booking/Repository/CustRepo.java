package com.movie.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.movie.booking.Model.Customer;

public interface CustRepo extends JpaRepository<Customer,Integer> {

}
