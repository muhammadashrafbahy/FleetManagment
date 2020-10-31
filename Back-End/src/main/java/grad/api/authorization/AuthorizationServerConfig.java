package grad.api.authorization;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

	@Autowired
    private AuthenticationManager authenticationManager;
 	
    ///////////////////////////defines security constrains on the token
	@Override
	public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
		security.checkTokenAccess("isAuhtenticated()");// return true if the user is not anonymous
		
	
	}

	 @Override
	    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
	        clients.inMemory().withClient("client_id")//the client_id for the refresh token
	                .authorizedGrantTypes("client-credentials", "password")//used for authorize the user to get the access_token  
	                .authorities("ROLE_CLIENT", "ROLE_ANDROID_CLIENT")
	                .scopes("read", "write", "trust")//the client limits
	                .resourceIds("oauth2-resource").additionalInformation("aaaaa")
	                .accessTokenValiditySeconds(50000000)
	                
	                .secret("android-secret").refreshTokenValiditySeconds(50000);//the client_secret for the refresh token
	    }
	 
	    @Override
	    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
	        endpoints.authenticationManager(authenticationManager)
	                .allowedTokenEndpointRequestMethods(HttpMethod.GET, HttpMethod.POST);
	        ;
	    }
}



