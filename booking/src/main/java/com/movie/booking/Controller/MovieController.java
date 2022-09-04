package com.movie.booking.Controller;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.movie.booking.Model.Movies;
import com.movie.booking.Repository.MovieRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MovieController {

	@Autowired
	private MovieRepo mrepo;
	
	@GetMapping("/getmovie")
	public List<Movies> getAllMovie(){
		return mrepo.findAll();
	}
	
//	public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
//		Set<ImageModel> imageModels=new HashSet<>();
//		
//		for(MultipartFile file: multipartFiles) {
//			ImageModel imageModel=new ImageModel(
//					 file.getOriginalFilename(),
//					file.getContentType(),
//					file.getBytes());
//			imageModels.add(imageModel);
//		}
//		return imageModels;
//	}
//	
//	@PostMapping(value={"/addmovie"},consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
//	public Movies addMovie(@RequestPart("movie") Movies m, @RequestPart("imageFile") MultipartFile[] file) {
//		try {
//			Set<ImageModel> images= uploadImage(file);
//			m.setMovieImages(images);
//			return mrepo.save(m);	
//		}catch(Exception e) {
//			System.out.println(e.getMessage());
//			return null;
//		}
//		
//	}
	
	@PostMapping("/addmovie")
	public Movies addMovie(@RequestBody Movies m) {
		return mrepo.save(m);
	}
	
	@GetMapping("/getmoviebyid/{id}")
	public Optional<Movies> getScreenById(@PathVariable int id){
		return mrepo.findById(id);
	}
	
	@DeleteMapping("/delmovie/{id}")
	public void deleteMovie(@PathVariable int id) {
		mrepo.deleteById(id);
	}
	
	@PutMapping("/updatemovie/{id}")
	public Movies updateScreen(@PathVariable int id, @RequestBody Movies movie) {
		return mrepo.save(movie);
	}

}
