import requests

import logging

logger = logging.getLogger(__name__)

def test_get_api():
    """Test that the api returns 200"""
    url = "http://127.0.0.1:3000/users"
    response = requests.get(url)
    assert response.status_code == 200

def test_get_user():
    """Get user id 2"""
    url = "http://127.0.0.1:3000/users/2"
    response = requests.get(url)
    assert response.status_code == 200
    assert response.json()["id"] == 2