/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package grad.api.Entities;

import com.fasterxml.jackson.annotation.*;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.*;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.Email;




/**
 *
 * @author MUHAMMAD ASHRAF BAHY
 */
@JsonIgnoreProperties({"empl_list","tsk_list","cl_list"})

@Entity
@DynamicUpdate
public class manager {
  
    private int mng_id ;
    
//    @NotNull
//    @Size(min=1)
    private String comp_name;
//    @NotNull
//    @Size(min=1)
    private String comp_passwd;
//    @NotNull
//    @Email
    private String comp_email;
    private String comp_website;
    private String comp_field;
//    @NotNull
    private String comp_country;
//    @NotNull
    private String comp_city;
//    @NotNull
    private String comp_dist;
//    @NotNull
//    @Min(value=1)
    private Double comp_long;
//    @NotNull
//    @Min(value=1)
    private Double comp_lat;
    private String comp_phone;
    private List<task> tsk_list = new ArrayList<task>();
    private List<clients> cl_list = new ArrayList<clients>();
    private List<employee> empl_list = new ArrayList<employee>() ;
//    private JSONOb all;
    
    
    public manager() {
    }

    public manager(String comp_name, String comp_passwd, String comp_email, String comp_website, String comp_field, String comp_country, String comp_city, String comp_dist, Double comp_long, Double comp_lat, String comp_phone) {
        this.comp_name = comp_name;
        this.comp_passwd = comp_passwd;
        this.comp_email = comp_email;
        this.comp_website = comp_website;
        this.comp_field = comp_field;
        this.comp_country = comp_country;
        this.comp_city = comp_city;
        this.comp_dist = comp_dist;
        this.comp_long = comp_long;
        this.comp_lat = comp_lat;
        this.comp_phone = comp_phone;
    }

     @Id
      @GeneratedValue (strategy = GenerationType.AUTO)
    public int getId() {
        return mng_id;
    }

    public void setId(int id) {
        this.mng_id = id;
    }
     
    
   
    
    public String getComp_name() {
        return comp_name;
    }

    public void setComp_name(String comp_name) {
        this.comp_name = comp_name;
    }

    public String getComp_passwd() {
        return comp_passwd;
    }

    public void setComp_passwd(String comp_passwd) {
        this.comp_passwd = comp_passwd;
    }
     
    
    
    public String getComp_email() {
        return comp_email;
    }

    public void setComp_email(String comp_email) {
        this.comp_email = comp_email;
    }

    public String getComp_website() {
        return comp_website;
    }

    public void setComp_website(String comp_website) {
        this.comp_website = comp_website;
    }

    public String getComp_field() {
        return comp_field;
    }

    public void setComp_field(String comp_field) {
        this.comp_field = comp_field;
    }

    public String getComp_country() {
        return comp_country;
    }

    public void setComp_country(String comp_country) {
        this.comp_country = comp_country;
    }

    public String getComp_city() {
        return comp_city;
    }

    public void setComp_city(String comp_city) {
        this.comp_city = comp_city;
    }

    public String getComp_dist() {
        return comp_dist;
    }

    public void setComp_dist(String comp_dist) {
        this.comp_dist = comp_dist;
    }

    public Double getComp_long() {
        return comp_long;
    }

    public void setComp_long(Double comp_long) {
        this.comp_long = comp_long;
    }

    public Double getComp_lat() {
        return comp_lat;
    }

    public void setComp_lat(Double comp_lat) {
        this.comp_lat = comp_lat;
    }

    public String getComp_phone() {
        return comp_phone;
    }

    public void setComp_phone(String comp_phone) {
        this.comp_phone = comp_phone;
    }
    
    
    //////////////////////////////////////////////////
  @OneToMany(cascade = CascadeType.ALL ,targetEntity = employee.class)
    @JoinTable (name = "mng_emp" ,joinColumns = {@JoinColumn(name = "mng_id")},inverseJoinColumns = {@JoinColumn(name="emp_id")})
    public List<employee> getEmpl_list() {
        return empl_list;
    }

    
  
    public void setEmpl_list(List<employee> empl_list) {
        this.empl_list = empl_list;
    }

    
    
    @OneToMany(fetch = FetchType.EAGER,cascade=CascadeType.ALL  , targetEntity=task.class)
    @JoinTable (name = "mng_task" ,joinColumns = {@JoinColumn(name = "mng_id")},inverseJoinColumns = {@JoinColumn(name="tsk_id")})
	public List<task> getTsk_list() {
		return tsk_list;
	}

	public void setTsk_list(List<task> tsk_list) {
		this.tsk_list = tsk_list;
	}

	
	
	
	@OneToMany(cascade=CascadeType.ALL  , targetEntity=clients.class)
    @JoinTable (name = "mng_client" ,joinColumns = {@JoinColumn(name = "mng_id")},inverseJoinColumns = {@JoinColumn(name="cl_id")})
	
	public List<clients> getCl_list() {
		return cl_list;
	}

	public void setCl_list(List<clients> cl_list) {
		this.cl_list = cl_list;
	}
  
    
    
    
    
}
