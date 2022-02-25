import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register, Error, Landing, ProtectedRoute } from './pages';
import { AddJob, AllJob, Proflie, Stats } from './pages/dashboard';
import SharedLayout from './pages/dashboard/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJob />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Proflie />} />
        </Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
