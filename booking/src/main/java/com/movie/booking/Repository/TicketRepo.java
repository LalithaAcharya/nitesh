package com.movie.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.booking.Model.Ticket;
@Repository
public interface TicketRepo extends JpaRepository<Ticket, Integer> {

}
