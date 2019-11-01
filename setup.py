# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in portal_spa/__init__.py
from portal_spa import __version__ as version

setup(
	name='portal_spa',
	version=version,
	description='Portal Single Page Application',
	author='Revant',
	author_email='revant.one@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
