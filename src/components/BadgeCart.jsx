import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 2,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

export const BadgeCart = () => {
    const { getTotalItems } = useCart();
    return (
        <>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={getTotalItems()} color="primary">
                    <Link to="/Carrito"><ShoppingCartIcon /></Link>   
                </StyledBadge>
            </IconButton>

        </>
    )
}
