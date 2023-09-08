export default {
    missingBearer: { error: { message: 'Missing bearer token' }, status: 401 },
    invalidSignature: { error: { message: 'invalid signature' }, status: 401 },
    jwtError: { error: { message: 'Error in token jwt' }, status: 401 },
    forbidden: { error: { message: 'Insufficient permission' }, status: 403 },
    notFound: {
        user: { error: { message: 'User not found' }, status: 404 },
    },
};
