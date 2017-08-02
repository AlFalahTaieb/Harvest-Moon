import React from 'react';
import AddFishForm from './AddFishForm';
import base from '../base';


class Inventory extends React.Component {
constructor(){
	super();
  this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uid: null,
      owner: null
    }
  }

componentDidMount(){
	base.onAuth((user)=>{
if(user){
	this.authHandler(null,{user});
}
	});
}


handleChange(e,key){
	const fruit=this.props.fruits[key];
	//prendre une copie et maj
	const updatedFruit={
		...fruit,
[e.target.name]:e.target.value
	}
	this.props.updateFruit(key,updatedFruit);
}


logout(){
	base.unauth();
	this.setState({uid:null});
}

 authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  logout() {
    base.unauth();
    this.setState({ uid: null });
  }

  authHandler(err, authData)  {
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    // grab the store info
    const storeRef = base.database().ref(this.props.storeId);

    // query the firebase once for the store data
    storeRef.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      // claim it as our own if there is no owner already
      if(!data.owner) {
        storeRef.set({
          owner: authData.user.uid
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      });
    });

  }






renderLogin(){
return(

   <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
      </nav>
	)

}



renderInventory(key){

	const fruit = this.props.fruits[key];
	return(
		<div className="fruit-edit" key={key}>
		<input type="text" name="name" value={fruit.name} placeholder="Fruit Name" onChange={(e)=>this.handleChange(e,key)}/>
		<input type="text" name="price" value={fruit.price} placeholder="Fruit Price" onChange={(e)=>this.handleChange(e,key)}/>
		<select type="text" name="status" value={fruit.status} placeholder="Fruit Status"onChange={(e)=>this.handleChange(e,key)}>
		
	<option value="available">Fresh!</option>
	<option value="unavailable">Sold Out!</option>

</select>
		<textarea type="text" name="desc" value={fruit.desc} placeholder="Fruit Desc" onChange={(e)=>this.handleChange(e,key)}/>
		<input type="text" name="image" value={fruit.image} placeholder="Fruit Image" onChange={(e)=>this.handleChange(e,key)}/>

<button onClick={()=>this.props.removeF(key)}>Remove Fruit</button>
		</div>
		)
}


	render(){
   const logout = <button onClick={this.logout}>Log Out!</button>;
    // check if they are no logged in at all
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    // Check if they are the owner of the current store
    if(this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you aren't the owner of this store!</p>
          {logout}
        </div>
      )
    }





		return (

			<div>
				<h2>Inventory</h2>
				{logout}
				{Object.keys(this.props.fruits).map(this.renderInventory)}
			<AddFishForm addF={this.props.addF}/>
			<button onClick={this.props.loadSamples}>Load simple fruits</button>

			</div>
			
			)
	}
}

Inventory.propTypes={
fruits:React.PropTypes.object.isRequired,
updateFruit:React.PropTypes.func.isRequired,
removeF:React.PropTypes.func.isRequired,
addF:React.PropTypes.func.isRequired,
loadSamples:React.PropTypes.func.isRequired,
storeId:React.PropTypes.string.isRequired,

};


export default Inventory;