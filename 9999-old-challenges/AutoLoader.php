<?php

class ClassAutoloader {

    public function __construct() {
        spl_autoload_register(array($this, 'loader'));
    }

    private function loader($className) {
        if (class_exists($className)) {
            return;
        }
        $file = $this->getClassFilePath($className);
        if (!file_exists($file)) {
            debug_backtrace();
            return;
        }
        require_once $file;
    }

    private function getRootDir() {
        if (!defined('SYSTEM_DIR')) {
            if (file_exists('/dados/www/html/')) {
                @define('SYSTEM_DIR', '/dados/www/html/');
            } else if (file_exists('/var/www/html/')) {
                @define('SYSTEM_DIR', '/var/www/html/');
            } else {
                @define('SYSTEM_DIR', $_SERVER['DOCUMENT_ROOT'] . '/eccosys/');
            }
        }

        $root = SYSTEM_DIR;
        return $root;
    }

    private function getClassFilePath($className) {
        $root = $this->getRootDir();
        $file = $root . $className . '.php';
        $cfile = str_replace("\\", "/", $file);
        return $cfile;
    }

}

$autoloader = new ClassAutoloader();
?>