import { Navbar,Welcome,Footer,Transactions,Services,Loader,AddToken } from './components';

const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
        <Services />
        <AddToken />
        
        <Transactions />
        <Footer />
    </div>
  )
}

export default App
