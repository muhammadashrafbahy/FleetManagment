/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.Entities;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 * 
 * 
 */
@JsonIgnoreProperties({"task_list", "cat"})
@Entity
public class clients {

     private int client_id;
     private Double client_long;
     private Double client_lat;
     private String client_fname;
     private String client_lname;
     private String client_phone;
     private String client_country;
     private String client_city;
     private String client_distr;
  
    private int cat_id; 
    private  category cat;
    public clients() {
    }


  

    public clients(Double client_long, Double client_lat, String client_fname, String client_lname, String client_phone,
			String client_country, String client_city, String client_distr) {
	
		this.client_long = client_long;
		this.client_lat = client_lat;
		this.client_fname = client_fname;
		this.client_lname = client_lname;
		this.client_phone = client_phone;
		this.client_country = client_country;
		this.client_city = client_city;
		this.client_distr = client_distr;
	}




	public Double getClient_long() {
        return client_long;
    }

    public void setClient_long(Double client_long) {
        this.client_long = client_long;
    }

    public Double getClient_lat() {
        return client_lat;
    }

    public void setClient_lat(Double client_lat) {
        this.client_lat = client_lat;
    }

    public String getClient_fname() {
        return client_fname;
    }

    public void setClient_fname(String client_fname) {
        this.client_fname = client_fname;
    }

    public String getClient_lname() {
        return client_lname;
    }

    public void setClient_lname(String client_lname) {
        this.client_lname = client_lname;
    }

    public String getClient_phone() {
        return client_phone;
    }

    public void setClient_phone(String client_phone) {
        this.client_phone = client_phone;
    }

    public String getClient_country() {
        return client_country;
    }

    public void setClient_country(String client_country) {
        this.client_country = client_country;
    }

    public String getClient_city() {
        return client_city;
    }

    public void setClient_city(String client_city) {
        this.client_city = client_city;
    }

    public String getClient_distr() {
        return client_distr;
    }

    public void setClient_distr(String client_distr) {
        this.client_distr = client_distr;
    }
     
     
    @Id
    @GeneratedValue (strategy = GenerationType.AUTO)
        public int getClients_id() {
		return client_id;
	}

	public void setClients_id(int clients_id) {
		this.client_id = clients_id;
	}

	
	@ManyToOne(targetEntity=category.class , cascade=CascadeType.ALL)
	public category getCat() {
		return cat;
	}

	public void setCat(category cat) {
		this.cat = cat;
	}




	public int getCat_id() {
		return cat_id;
	}




	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}
	
	

//		@OneToMany (cascade = CascadeType.ALL , targetEntity = task.class)
////    @JoinTable (name = "client_task" , joinColumns = {@JoinColumn(name="client-id")},inverseJoinColumns = {@JoinColumn(name="task_id")} )
//    public List<task> getTask_list() {
//        return task_list;
//    }
//
//    public void setTask_list(List<task> task_list) {
//        this.task_list = task_list;
//    }
    
}
