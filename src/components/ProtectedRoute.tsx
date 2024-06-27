import React, { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const category = localStorage.getItem('category');

    useEffect(() => {
        if (!category) {
            navigate('/categories');
            alert('you must choose category first !');
        }
    }, [category, navigate]);

    return category ? <>{children}</> : null;
};

export default ProtectedRoute;
