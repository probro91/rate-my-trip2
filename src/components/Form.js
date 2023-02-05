import './form.css'

const Form = ({childern}) => {
  return (
    <div>
    <div class="center">
      <h1>Login</h1>
      <form action = "login_Verifcation.php" method="post">
      <p>
        <div class="txt_field">
          <label for="username"></label>
               <input type="text" name="username" id="username" placeholder="username" required> </input>
        </div>
        </p>

        <p>
        <div class="txt_field">
          <label for="password"></label>
          <input type="password" name="password" id="password" placeholder="password" required> </input>
        </div>
        </p>
        <p>
        <div class="pass"> <a href ="forgotPass.php">  Forgot Password? </a>
        </div>


        <input type="submit" value="Login"> </input>
        <div class="signup_link">
          Not a member? <a href="index.php"> Sign up </a>
        </div>
        </p>
      </form>
    </div>
  </div>
  )
}

export default Form