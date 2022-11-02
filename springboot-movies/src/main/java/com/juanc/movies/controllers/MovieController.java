package com.juanc.movies.controllers;

import com.juanc.movies.models.Movie;
import com.juanc.movies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MovieController {

   private final MovieService movieService;

   public MovieController(MovieService movieService){
      this.movieService = movieService;
   }

   @GetMapping("/")
   public List<Movie> getMovies(){
      return movieService.getMovies();
   }

   @GetMapping("/{idMovie}")
   public Movie getMovieById(@PathVariable String idMovie){
      return movieService.getMovieById(idMovie);
   }

   @PostMapping("/")
   public Movie saveMovie(@RequestBody Movie movie){
      return movieService.saveMovie(movie);
   }

   @PutMapping("/{idMovie}")
   public Movie updateMovie(@PathVariable String idMovie, @RequestBody Movie movie){
      return movieService.updateMovie(idMovie, movie);
   }

   @DeleteMapping("/{idMovie}")
   public Movie deleteMovie(@PathVariable String idMovie){
      return movieService.deleteMovie(idMovie);
   }

   @GetMapping("/qualificationLessThan/{qualification}")
   public List<Movie> getMoviesByQualificationLessThan(@PathVariable int qualification){
      return movieService.getMoviesByQualificationLessThan(qualification);
   }

   @GetMapping("/qualificationOverThan/{qualification}")
   public List<Movie> getMoviesByQualificationOverThan(@PathVariable int qualification){
      return movieService.getMoviesByQualificationOverThan(qualification);
   }

}
