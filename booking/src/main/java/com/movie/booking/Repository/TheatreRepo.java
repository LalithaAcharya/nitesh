package com.movie.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.booking.Model.Theater;


@Repository
public interface TheatreRepo extends JpaRepository<Theater, Integer> {

}
