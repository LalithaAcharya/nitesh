package com.movie.booking.Model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "Movie")
public class Movies {
	   @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(name = "movie_id")
	   private int movie_id;
	   @Column(name = "movie_name")
	   private String movie_name;
	   @Column(name = "discription")
	   private String discription;
	   @Column(name = "hero")
	   private String hero;
	   @Column(name = "heroien")
	   private String heroien;
	   @Column(name = "director", length=1000000)
	   private String director;
	   @Column(name = "language")
	   private String language;
	   
//	   @ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	   @JoinTable(name="movies_images",
//	   joinColumns= {
//			   @JoinColumn(name="movie_id")
//	   },
//	   inverseJoinColumns= {
//			   @JoinColumn(name="image_id")
//	   })
//	   private Set<ImageModel> movieImages;
//	   
//	   
//	   public Set<ImageModel> getMovieImages() {
//		return movieImages;
//	}
//
//
//
//	public void setMovieImages(Set<ImageModel> movieImages) {
//		this.movieImages = movieImages;
//	}



	public Movies() {
		super();
	}



	public Movies(int movie_id, String movie_name, String discription, String hero, String heroien, String director,
			String language) {
		super();
		this.movie_id = movie_id;
		this.movie_name = movie_name;
		this.discription = discription;
		this.hero = hero;
		this.heroien = heroien;
		this.director = director;
		this.language = language;
//		Screens = screens;
	}



	public int getMovie_id() {
		return movie_id;
	}



	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}



	public String getMovie_name() {
		return movie_name;
	}



	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}



	public String getDiscription() {
		return discription;
	}



	public void setDiscription(String discription) {
		this.discription = discription;
	}



	public String getHero() {
		return hero;
	}



	public void setHero(String hero) {
		this.hero = hero;
	}



	public String getHeroien() {
		return heroien;
	}



	public void setHeroien(String heroien) {
		this.heroien = heroien;
	}



	public String getDirector() {
		return director;
	}



	public void setDirector(String director) {
		this.director = director;
	}



	public String getLanguage() {
		return language;
	}



	public void setLanguage(String language) {
		this.language = language;
	}




}
