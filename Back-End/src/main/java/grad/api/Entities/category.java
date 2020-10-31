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
 */
@Entity
@JsonIgnoreProperties({"client_list"})
public class category {
  
    private int categ_id;
    private String categ_type;
    private List<clients> client_list = new ArrayList<clients>() ;
    public category() {
    }

    public category( String categ_type) {
    
        this.categ_type = categ_type;
    }

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public int getCateg_id() {
        return categ_id;
    }

    public void setCateg_id(int categ_id) {
        this.categ_id = categ_id;
    }

    public String getCateg_type() {
        return categ_type;
    }

    public void setCateg_type(String categ_type) {
        this.categ_type = categ_type;
    }
       @OneToMany (cascade = CascadeType.ALL , targetEntity = clients.class)
//    @JoinTable (joinColumns = {@JoinColumn(name="categ-id")},inverseJoinColumns = {@JoinColumn(name="client_id")} )

    public List<clients> getClient_list() {
        return client_list;
    }

    public void setClient_list(List<clients> client_list) {
        this.client_list = client_list;
    }
  
    
}
