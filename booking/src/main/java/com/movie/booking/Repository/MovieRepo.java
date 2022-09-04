package com.movie.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movie.booking.Model.Movies;


@Repository
public interface MovieRepo extends JpaRepository<Movies, Integer>  {

}
