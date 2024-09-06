'use client';
import React from 'react';
import { useRouter } from 'next/router';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const LoginPage = () => {
    const router = useRouter();
    const [submitError, setSubmitError] = React.useState('');

    const form = useForm<z.infer<typeof FormSchema>>({
        mode: "onChange",
        resolver: zodResolver(FormSchema),
        defaultValues: { email: '', password: '' },
    })
    return (
        <div>LoginPage</div>
    )
};

export default LoginPage