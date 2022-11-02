package com.juanc.movies.repository;

import com.juanc.movies.models.Movie;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MovieRepositoryImpl implements IMovieRepository{

   private Map<String, Movie> moviesMap;

   public MovieRepositoryImpl(){
      moviesMap = new HashMap<>();
   }

   @Override
   public List<Movie> getMovies() {
      List<Movie> allMoviesList = new ArrayList<>();
      allMoviesList.addAll(moviesMap.values());
      return allMoviesList;
   }

   @Override
   public Movie getMovieById(String idMovie) {
      return moviesMap.get(idMovie);
   }

   @Override
   public Movie saveMovie(Movie movie) {
      UUID uuid = UUID.randomUUID();
      String uuidStr = uuid.toString().substring(0, 13);
      movie.setIdMovie(uuidStr);
      return moviesMap.put(uuidStr, movie);
   }

   @Override
   public Movie updateMovie(String idMovie, Movie movie) {
      return moviesMap.replace(idMovie, movie);
   }

   @Override
   public Movie deleteMovie(String idMovie) {
      return moviesMap.remove(idMovie);
   }

   @Override
   public List<Movie> getMoviesByQualificationLessThan(int qualification) {
      List<Movie> listMovies = new ArrayList<>();

      for (Movie mov: moviesMap.values()) {
         if(mov.getQualification() < qualification){
            listMovies.add(mov);
         }
      }

      return listMovies;
   }

   @Override
   public List<Movie> getMoviesByQualificationOverThan(int qualification) {
      List<Movie> listMovies = new ArrayList<>();

      for (Movie mov: moviesMap.values()) {
         if(mov.getQualification() > qualification){
            listMovies.add(mov);
         }
      }

      return listMovies;
   }
}
