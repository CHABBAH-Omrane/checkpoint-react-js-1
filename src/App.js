import developerworking from '../src/img/developerworking.jpg';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';

function App() {
	return (
		<div className="App">
			{/* <img src={developerworking} className="background" alt="logo" /> */}
			{/* <header className="App-header">
			 */}
			<Navbar></Navbar>

			<center>
				<form
					style={{ marginTop: '157px', width: '30%' }}
					className=" col-7 row g-1 container center-alings text-center bg-secondary bg-opacity-25
           "
				>
					<div className="col-7">
						<label htmlFor="inputEmail4" className="form-label text-white ">
							Email
						</label>
						<input type="email" className="form-control" id="inputEmail4" />
					</div>
					<div className="col-7">
						<label htmlFor="inputPassword4" className="form-label text-white">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="inputPassword4"
						/>
					</div>
					<div className="col-7">
						<label htmlFor="inputAddress" className="form-label text-white">
							Github
						</label>
						<input
							type="url"
							className="form-control"
							id="inputAddress"
							placeholder="*******github.com"
						/>
					</div>
					<div className="col-7">
						<label htmlFor="inputAddress2" className="form-label text-white">
							LinkedIn
						</label>
						<input
							type="url"
							className="form-control"
							id="inputAddress2"
							placeholder="linkedin.com"
						/>
					</div>

					<div className="col-7">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								id="gridCheck"
							/>
							<label
								className="form-check-label text-white"
								htmlFor="gridCheck"
							>
								Check me out
							</label>
						</div>
					</div>
					<div className="col-7 ">
						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</div>
				</form>
			</center>
			{/* </header> */}
		</div>
	);
}

export default App;
