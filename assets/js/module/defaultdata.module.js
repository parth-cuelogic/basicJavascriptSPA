
var DefaultDataModule = (function (UserModule) {
    
        UserModule.register(new UserModule.User('parth', '123', 'p@g.com', 'student', [12, 14, 15]));
        UserModule.register(new UserModule.User('neel', '123', 'n@g.com', 'student', [13, 14, 15]));
        UserModule.register(new UserModule.User('kiran', '123', 'k@g.com', 'student', [12]));
        UserModule.register(new UserModule.User('as', '123', 'k@g.com', 'student', [19, 18]));
        UserModule.register(new UserModule.User('bs', '123', 'k@g.com', 'student', [17]));
        UserModule.register(new UserModule.User('cs', '123', 'k@g.com', 'student', [16, 17]));
        UserModule.register(new UserModule.User('ds', '123', 'k@g.com', 'student'));
        UserModule.register(new UserModule.User('es', '123', 'k@g.com', 'student'));
        UserModule.register(new UserModule.User('xs', '123', 'k@g.com', 'student'));
        UserModule.register(new UserModule.User('ys', '123', 'k@g.com', 'student'));
        UserModule.register(new UserModule.User('zs', '123', 'k@g.com', 'student'));
    
        //teachers
        UserModule.register(new UserModule.User('himanshu', '123', 'h@g.com', 'teacher', [1, 3]));
        UserModule.register(new UserModule.User('xt', '123', 'h@g.com', 'teacher', [2]));
        UserModule.register(new UserModule.User('yt', '123', 'h@g.com', 'teacher', [1, 2]));
        UserModule.register(new UserModule.User('zt', '123', 'h@g.com', 'teacher', [1, 2]));
        UserModule.register(new UserModule.User('at', '123', 'h@g.com', 'teacher', [6]));
        UserModule.register(new UserModule.User('bt', '123', 'h@g.com', 'teacher', [5, 6]));
        UserModule.register(new UserModule.User('ct', '123', 'h@g.com', 'teacher', [4]));
        UserModule.register(new UserModule.User('dt', '123', 's@g.com', 'student', [4]));
    
    })(UserModule);
    