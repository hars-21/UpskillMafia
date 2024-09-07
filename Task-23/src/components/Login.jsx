export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
