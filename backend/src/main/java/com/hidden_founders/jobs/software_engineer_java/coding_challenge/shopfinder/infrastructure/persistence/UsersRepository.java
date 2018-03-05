package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.persistence;

import org.springframework.data.mongodb.repository.MongoRepository;

interface UsersRepository extends MongoRepository<UserEntity, String> {
    UserEntity save(UserEntity user);
}
