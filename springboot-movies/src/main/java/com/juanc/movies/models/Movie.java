package com.juanc.movies.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

   private String idMovie;
   private String name;
   private String genre;
   private String director;
   private int qualification;

}
