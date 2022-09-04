package com.movie.booking.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Tickets")
public class Ticket {
	
	  @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	  	@Column(name="ticket_id")
	  	private int ticket_id;
	  @Column(name="name")
	  	private String name;
	  @Column(name="no_of_seats")
	  	private int no_of_seats;
	  @Column(name="movie_name")
	  	private String movie_name;
	  @Column(name="theater_name")
	  	private String theater_name;
	  @Column(name="movie_date")
	  	private String movie_date;
	  @Column(name="movie_time")
	  	private String movie_time;
	  @Column(name="price")
	  	private int price;
	  @Column(name="ph_no")
	  	private int ph_no;
	  @Column(name="seats")
		private String seats[];
	  
	  
	public Ticket() {
		super();
	}
	public Ticket(int ticket_id, String name, int no_of_seats, String movie_name,String theater_name, String movie_date, String movie_time, int price,
			int ph_no,String seats[]) {
		super();
		this.ticket_id = ticket_id;
		this.name = name;
		this.movie_name=movie_name;
		this.theater_name=theater_name;
		this.no_of_seats = no_of_seats;
		this.movie_date = movie_date;
		this.movie_time = movie_time;
		this.price = price;
		this.ph_no = ph_no;
		this.seats=seats;
	}
	public int getTicket_id() {
		return ticket_id;
	}
	public void setTicket_id(int ticket_id) {
		this.ticket_id = ticket_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getMovie_name() {
		return movie_name;
	}
	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}
	
	public String getTheater_name() {
		return theater_name;
	}
	public void setTheater_name(String theater_name) {
		this.theater_name = theater_name;
	}
	public int getNo_of_seats() {
		return no_of_seats;
	}
	public void setNo_of_seats(int no_of_seats) {
		this.no_of_seats = no_of_seats;
	}
	public String getMovie_date() {
		return movie_date;
	}
	public void setMovie_date(String movie_date) {
		this.movie_date = movie_date;
	}
	public String getMovie_time() {
		return movie_time;
	}
	public void setMovie_time(String movie_time) {
		this.movie_time = movie_time;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getPh_no() {
		return ph_no;
	}
	public void setPh_no(int ph_no) {
		this.ph_no = ph_no;
	}
	public String[] getSeats() {
		return seats;
	}
	public void setSeats(String[] seats) {
		this.seats = seats;
	}
	  

}
