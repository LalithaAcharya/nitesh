package com.movie.booking.Model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "Theatre")
public class Theater {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "theatre_id")
	private int theatre_id;
	@Column(name = "theatre_name")
	private String theatre_name;
	@Column(name = "location")
	private String location;
	@Column(name = "no_of_screens")
	private int no_of_screens;
	@Column(name="movie_name")
	private String movie_name;
	
	public Theater() {
		super();
	}
	
	public int getTheatre_id() {
		return theatre_id;
	}
	public void setTheatre_id(int theatre_id) {
		this.theatre_id = theatre_id;
	}
	public String getTheatre_name() {
		return theatre_name;
	}
	public void setTheatre_name(String theatre_name) {
		this.theatre_name = theatre_name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	public Theater(int theatre_id, String theatre_name, String location,int no_of_screens,String movie_names) {
		super();
		this.theatre_id = theatre_id;
		this.theatre_name = theatre_name;
		this.location = location;
		this.no_of_screens=no_of_screens;
		this.movie_name=movie_name;
		
//		Screens = screens;
	}

	

	public String getMovie_name() {
		return movie_name;
	}

	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}



	public int getNo_of_screens() {
		return no_of_screens;
	}

	public void setNo_of_screens(int no_of_screens) {
		this.no_of_screens = no_of_screens;
	}
	
}
