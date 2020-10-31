package grad.api.clients;

import java.net.URI;
import java.net.URISyntaxException;

import javax.ws.rs.client.*;
import javax.ws.rs.core.MediaType;


public class client {
	
Client cl = ClientBuilder.newClient();
	


public void send() throws Exception {
	WebTarget wb = cl.target(new URI("https://andruxnet-world-cities-v1.p.mashape.com"));
	
	WebTarget wt = wb.path("/?query=egypt&searchby=country");
	
	wt.request(MediaType.APPLICATION_JSON_TYPE).get();
	
}	
	

}
