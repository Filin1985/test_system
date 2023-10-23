import {Navigate, Route, Routes} from 'react-router-dom';
import Layout from './layout/layout';
import StartPage from './startPage/startPage';
import QuestionPage from './questionPage/questionPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='start' replace />} />
        <Route path='start' element={<StartPage />} />
        <Route path='test' element={<QuestionPage />} />

        <Route
          path='*'
          element={
            <h1 className='text text_type_main-extra-large'>
              Страница не найдена или её никогда не было
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}
